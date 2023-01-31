# Motivation Journal

Motivation Journal is a journaling app that allows users to create, read, write, and delete (CRUD) journal entries. It leverages a Next.js client with a Ruby on Rails API server and fetches inspirational quotes from a third party API, [Quotable](https://github.com/lukePeavey/quotable).

Check out the live demo at https://motivation-journal.vercel.app/.

## Demo

https://user-images.githubusercontent.com/70108137/215829553-60624d48-38fa-475c-b5b3-b857fb1bc1e4.mp4

## Technologies
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Ruby on Rails](https://rubyonrails.org/)
- [Material UI](https://mui.com/)
- [Ruby](https://www.ruby-lang.org/en/)
- [JSON Web Tokens](https://jwt.io/)

## Configuration

To run locally, fork and clone this repo.

### Available Scripts

- `npm install` - installs dependencies.

- `npm run dev` - Runs the app in development mode at http://localhost:3000.

### Set Up the Server Locally:
Fork and clone the back end ([motivation-journal-backend](https://github.com/deliaconstantino/motivation-journal-backend)) and run it locally with `rails server`.

Add a `.env.local` file to this repo with the local server's url:
```
// .env.local

NEXT_PUBLIC_SERVER_URL=your-local-server-url, for example: http://localhost:3001/
```

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/deliaconstantino/motivation-journal. 
