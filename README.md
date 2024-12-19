# Template 템플릿
## next.js + supabase

### 화면
[노션](https://www.notion.so/15dff0f6d5d180aab1bcc17418a9d151?pvs=10)
1. 메인화면
2. 회사소개
   1. 인사말
   2. 조직도
   3. 구성원
   4. 연혁
   5. 오시는길
3. 제품소개
4. 고객지원
   1. 공지사항
   2. Q&A
   3. 문의하기
5. 어드민 
   1. 화면 편집 기능
   2. 일일 통계

### 2024.12.19

- [shadcn/ui](https://ui.shadcn.com/)
  - 사용법 
  ```
  npx shadcn@latest init
  pnpm dlx shadcn@latest add button
  ```
  필요할때마다 필요한 컨포넌트 추가해서 사용
  
  - @/components/ui 밑으로 추가되니까 커스텀 컴포넌트도 이밑에 넣으려고
```
@/components
 ㄴ ui
 ㄴ custom
```

- [v0](https://v0.dev/)
  - vercel 에서 만든 ai 인데 똑똑이..


구조 

### 2024.12.17 

#### 프로젝트 세팅

```angular2html
➜  npx create-next-app@latest                      
✔ What is your project named? … template
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack for `next dev`? … Yes
✔ Would you like to customize the import alias (`@/*` by default)? …Yes
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /Users/haeun/Documents/GitHub/template.

Using npm.

Initializing project with template: app-tw 


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc

```

#### supabase 세팅
- 프로젝트 생성
  - [supabase](https://supabase.com/docs) new project

  - 프로젝트 세팅
    - [supabase 공식문서](https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app)
    
    1. 패키지 설치
        `pnpm install @supabase/supabase-js @supabase/ssr`
    2. 환경변수 설정
        .env.local
    3. supabase 클라이언트를 생성하기 위한 유틸리티 함수 작성
        @/app/utils/supabase/client.ts // 브라우저에서 실행되는 클라이언트 구성요소에서 supabase에 엑세스
        @/app/utils/supabase/sever.ts // 서버에서만 실행되는 서버 구성 요소, 서버 작업 및 경로 핸들러에서 supabase에 엑세스
    4. 미들웨어 연결
        middleware.ts
        @/app/utils/supabase/middleware.ts
    5. ㅇ
    
    ...시련
    로그인을 했는데 페이지가 안넘어감
    -> 에러메세지도 안떳음 근데 에러 찍어보니 인증을 안했대 메일 확인해보니까 인증메일이 날라옴..
  - [사용자 리스트 확인하는곳](https://supabase.com/dashboard/project/perkigqwjhujszxbgkpv/auth/users)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
