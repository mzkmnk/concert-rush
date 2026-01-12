FROM rust:1.92-slim-bookworm AS builder
WORKDIR /app

COPY Cargo.toml Cargo.lock ./
RUN mkdir src && echo "fn main(){}" > src/main.rs
RUN cargo build --release
RUN rm -f target/release/deps/backend*

COPY src ./src
RUN cargo build --release

FROM gcr.io/distroless/cc-debian12
WORKDIR /app

COPY --from=builder /app/target/release/backend /app/backend

CMD [ "./backend" ]