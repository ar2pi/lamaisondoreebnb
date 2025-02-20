# lamaisondoreebnb

lamaisondoreebnb

## Attributes

- **Database**: postgres
- **Storage Adapter**: localDisk

```sh
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -P postgres
pnpm dev

# OR
docker compose up
```

## @TODO:

- [ ] homepage
- [ ] [rooms live preview](https://payloadcms.com/docs/live-preview/overview)
- [ ] [reservation form](https://payloadcms.com/docs/plugins/form-builder)
- [ ] [stripe integration](https://payloadcms.com/docs/plugins/stripe)
- [ ] [send reservation emails](https://payloadcms.com/docs/email/overview)
- [ ] [productionize build](https://payloadcms.com/docs/production/deployment) aws ecs fargate, rds postgres aurora serverless v2, s3, route53, acm, ses, etc.
- [ ] admin dashboard, reservation stats, calendar, etc.
- [ ] user profile
- [ ] [astro](https://docs.astro.build/en/guides/cms/payload/) (optional)
