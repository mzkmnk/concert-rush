use axum::{
    routing::get,
    Router,
    Json,
};
use serde_json::{Value, json};
use tokio::net::TcpListener;

#[tokio::main]
async fn main() {
    let app = Router::new().route("/health",get(health_check));

    let listener = TcpListener::bind("0.0.0.0:3000").await.unwrap();

    axum::serve(listener,app).await.unwrap();
}

async fn health_check() -> Json<Value> {
    Json(json!({"status": "ok"}))
}