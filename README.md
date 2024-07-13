## Take home exercise

Create a resource library for React development.
- list all resources
- filter by keywords
- search by description
- add new resource


Please use the API below to get/add resources 

```
GET https://intro-lemon.vercel.app/api/links 

POST https://intro-lemon.vercel.app/api/links 
{
    "url": "https://react.dev/learn",
    "description": "NextJs documentation",
    "keywords":"react, js, library"
}


DELETE https://intro-lemon.vercel.app/api/links/669077f0fcd039a3d9f29214
```

```typescript

type Resource = {
    url: string, 
    description:string, 
    keywords:string[]
}

```