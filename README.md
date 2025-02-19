# blank

blank

## Attributes

- **Database**: postgres
- **Storage Adapter**: localDisk

```sh
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -P postgres
pnpm dev

# OR
docker compose up
```
