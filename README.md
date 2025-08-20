# JWT Encoder / Decoder Tool

An open-source, browser-based tool to encode and decode JSON Web Tokens (JWT) using the [`jose`](https://github.com/panva/jose) library. Built with Next.js and Tailwind CSS.

## 🔍 Features

-   🔐 Encode JWT using custom Header, Payload, and Secret
-   🔓 Decode JWT to view its Header and Payload
-   🛡️ 100% client-side — no data is ever sent to a server
-   📦 Supports HS256 algorithm
-   🧪 Ideal for learning, testing, and debugging JWT-based systems

## 🚀 Live Demo

👉 [https://jwt.choman150.click](https://jwt.choman150.click)

## 🛠️ Tech Stack

-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [jose](https://github.com/panva/jose) — for JWT cryptographic operations

## 📦 Getting Started

Clone this project and install dependencies:

```bash
git clone https://github.com/choman150/jwt-tool.git
cd jwt-tool
yarn install
```

To start the development server:

```bash
yarn dev
```

To build for production:

```bash
yarn build
yarn start
```

## 📁 Folder Structure

```
src/
├── components/        # Reusable components (JWTTool, Menu, Footer)
├── pages/             # Application pages (index, about, faq, etc.)
public/                # Static files (favicon, sitemap.xml, etc.)
tailwind.config.js     # Tailwind CSS configuration
```

## 📝 License

This project is licensed under the MIT License.

---

> Built by [choman150](https://choman150.click) for developers, students, and anyone working with JWT.
