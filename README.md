## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend приложения
```

---

## Скрипты

-   `npm run start` - Запуск frontend проекта на webpack dev server
-   `npm run start:vite` - Запуск frontend проекта на vite
-   `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
-   `npm run start:dev:vite` - Запуск frontend проекта на vite
-   `npm run test:unit` - Запуск unit тестов с jest
-   `npm run test:ui` - Запуск скриншотных тестов с loki
-   `npm run start:dev:server` - Запуск backend сервера
-   `npm run test:ui:ok` - Подтверждение новых скриншотов
-   `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
-   `npm run test:ui:html`
-   `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
-   `npm run build` - Просто сборка с дефолтными параметрами выставленными внутри конфига
-   `npm run build:prod` - Сборка в prod режиме
-   `npm run build:dev` - Сборка в dev режиме (не минимизирован)
-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run test:ui:ci` - Запуск скриншотных тестов в CI
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером
-   `npm run storybook` - Запуск Storybook
-   `npm run storybook:build` - Сьорка Storybook билда
-   `npm run prepare` - Прекоммит хуки
-   `npm run generate:slice` - скрипт для генерации FSD слайсов

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design
Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/overview)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами. Файлы с переводами хранятся в public/locales.

для комфортной работы рекомендуется установить плагин для webstorm/vscode

Документация i18next - [https://www.i18next.com/](https://www.i18next.com/)

---

## Тесты

В проекте используется 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library - `npm run test:unit`
3. Скриншотное тестирование с loki - `npm run tets:ui`
4. e2e тестирование с Cypress - `npm run test:e2e`

Подробнее о тестах - [документация тестирования](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный _eslint-plugin-merchant-marine_,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entities)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов линтером
-   `npm run lint:scss:fix` - Исправление scss файлов линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью _storybook-addon-mock_.

Файл со сторикейсами содержит рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

`npm run storybook`

подробнее о [Storybook](/docs/storybook.md)

```typescript jsx
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        //backgroundColor: { control: "color" },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: "Text",
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: "Text",
    },
};

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const BackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: "Text",
    },
};

export const BackgroundThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: "Text",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedBackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: "Text",
    },
};

export const InvertedBackgroundThemeDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: "Text",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: "Text",
    },
};
```

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения

Вся конфигурация хранится в /config

-   /config/babel - babel
-   /config/build - конфигурация webpack
-   /config/jest - конфигурация тестовой среды
-   /config/storybook - конфигурация сторибука

В папке `scripts` находятся разлиные скрипты для рефакторинга/упрощения написания кода/генерации отчетов и т.д.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows. В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами , конфиг в /.husky

---

## Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit. По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK Query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

## Сущности (entities)

-   [Article](/src/entities/Article)
-   [Comment](/src/entities/Comment)
-   [Counter](/src/entities/Counter)
-   [Country](/src/entities/Country)
-   [Currency](/src/entities/Currency)
-   [Notification](/src/entities/Notification)
-   [Profile](/src/entities/Profile)
-   [Rating](/src/entities/Rating)
-   [User](/src/entities/User)

## Фичи (features)

-   [addCommentForm](/src/features/addCommentForm)
-   [articleEditForm](/src/features/articleEditForm)
-   [articleRating](/src/features/articleRating)
-   [articleRecommendationsList](/src/features/articleRecommendationsList)
-   [AuthByUserName](/src/features/AuthByUserName)
-   [avatarDropdown](/src/features/avatarDropdown)
-   [editableProfileCard](/src/features/editableProfileCard)
-   [LangSwitcher](/src/features/LangSwitcher)
-   [notificationButton](/src/features/notificationButton)
-   [profileRating](/src/features/profileRating)
-   [scrollRestoration](/src/features/scrollRestoration)
-   [ThemeSwitcher](/src/features/ThemeSwitcher)
