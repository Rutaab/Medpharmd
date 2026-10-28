mod db;
mod handlers;
mod models;
mod seed;

use actix_cors::Cors;
use actix_web::{web, App, HttpServer};
use std::sync::Mutex;

pub struct AppState {
    pub db: Mutex<rusqlite::Connection>,
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let conn = db::initialize().expect("Failed to initialize database");
    seed::seed_data(&conn).expect("Failed to seed data");

    let data = web::Data::new(AppState {
        db: Mutex::new(conn),
    });

    println!("Server running at http://0.0.0.0:8080");

    HttpServer::new(move || {
        let cors = Cors::permissive();

        App::new()
            .wrap(cors)
            .app_data(data.clone())
            .route("/api/categories", web::get().to(handlers::get_categories))
            .route("/api/categories/{id}", web::get().to(handlers::get_category))
            .route("/api/subcategories/{id}", web::get().to(handlers::get_subcategory))
            .route("/api/drugs", web::get().to(handlers::get_drugs))
            .route("/api/drugs/{id}", web::get().to(handlers::get_drug))
            .route("/api/drugs/category/{category_id}", web::get().to(handlers::get_drugs_by_category))
            .route("/api/drugs/subcategory/{subcategory_id}", web::get().to(handlers::get_drugs_by_subcategory))
            .route("/api/diseases", web::get().to(handlers::get_diseases))
            .route("/api/diseases/{id}", web::get().to(handlers::get_disease))
            .route("/api/biomarkers", web::get().to(handlers::get_biomarkers))
            .route("/api/biomarkers/{id}", web::get().to(handlers::get_biomarker))
            .route("/api/biomarkers/category/{category}", web::get().to(handlers::get_biomarkers_by_category))
            .route("/api/tests/categories", web::get().to(handlers::get_test_categories))
            .route("/api/tests/{category}", web::get().to(handlers::get_tests_by_category))
            .route("/api/tests/{category}/{slug}", web::get().to(handlers::get_test_detail))
            .route("/api/interactions", web::get().to(handlers::get_all_interactions))
            .route("/api/interactions/drug/{drug_name}", web::get().to(handlers::get_interactions_for_drug))
            .route("/api/formulary", web::get().to(handlers::get_formulary))
            .route("/api/formulary/{id}", web::get().to(handlers::get_formulary_drug))
            .route("/api/syllabus", web::get().to(handlers::get_syllabus))
            .route("/api/syllabus/{year_id}", web::get().to(handlers::get_syllabus_year))
            .route("/api/syllabus/{year_id}/{subject_id}", web::get().to(handlers::get_syllabus_subject))
            .route("/api/search", web::get().to(handlers::search))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
