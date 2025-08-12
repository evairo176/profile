# Multi-Language Setup dengan next-intl

## Overview

Project ini menggunakan `next-intl` untuk implementasi multi-language di Next.js 15+ dengan Pages Router.

## Bahasa yang Didukung

- 🇺🇸 English (en) - Default
- 🇮🇩 Bahasa Indonesia (id)

## Struktur File

```
├── messages/
│   ├── en.json          # English translations
│   └── id.json          # Indonesian translations
├── src/
│   ├── i18n/
│   │   ├── config.ts    # i18n configuration
│   │   └── request.ts   # Request handler
│   └── components/
│       └── commons/
│           └── LanguageSwitcher/  # Language switcher component
```

## Cara Menggunakan

### 1. Menambahkan Translations Baru

Tambahkan key-value pair di file `messages/en.json` dan `messages/id.json`:

```json
// messages/en.json
{
  "newSection": {
    "title": "New Section",
    "description": "This is a new section"
  }
}

// messages/id.json
{
  "newSection": {
    "title": "Bagian Baru",
    "description": "Ini adalah bagian baru"
  }
}
```

### 2. Menggunakan Translations di Component

```tsx
import { useTranslations } from "next-intl";

const MyComponent = () => {
  const t = useTranslations("newSection");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};
```

### 3. Menambahkan getStaticProps di Pages

```tsx
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};
```

## Components yang Sudah Diupdate

- ✅ Hero Component
- ✅ About Component
- ✅ Navbar Component
- ✅ Language Switcher Component

## URL Structure

- `/` - English (default)
- `/id` - Indonesian
- `/id/about` - Indonesian About page

## Language Switcher

Language switcher tersedia di:

- Desktop navbar (top right)
- Mobile menu (top left)

## Tips Development

1. Selalu tambahkan translations untuk semua bahasa yang didukung
2. Gunakan nested keys untuk organisasi yang lebih baik
3. Test semua halaman di kedua bahasa
4. Gunakan TypeScript untuk type safety pada translation keys
