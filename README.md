# Настройка Monorepo SvelteKit и Strapi

Этот документ описывает шаги по установке и запуску монорепозитория, содержащего frontend на SvelteKit и backend на CMS Strapi, без использования Docker.

## 1. Клонирование репозитория

Склонируйте репозиторий с GitHub:

```bash
git clone https://github.com/asafeeson/blog_aidi_cms_strapi
cd blog_aidi_cms_strapi
```

## 2. Установка и запуск CMS Strapi (Backend)

### Предварительные требования

* **Node.js:** Убедитесь, что у вас установлена поддерживаемая версия Node.js версии не ниже 20.

* **PostgreSQL:** Установите PostgreSQL и создайте базу данных для Strapi версии >14.

### Установка

1.  Перейдите в директорию `backend`:

    ```bash
    cd backend
    ```

2.  Установите зависимости:

    ```bash
    npm install
    ```

3.  Создайте файл `.env` в директории `backend` и добавьте переменные окружения для подключения к базе данных PostgreSQL и сгенерируйте ключи и соль для Strapi:

    ```bash
        # Server
        HOST=0.0.0.0
        PORT=1337

        # Secrets
        APP_KEYS=tobemodified
        API_TOKEN_SALT=tobemodified
        ADMIN_JWT_SECRET=tobemodified
        TRANSFER_TOKEN_SALT=tobemodified

        # Database
        DATABASE_CLIENT=postgres
        DATABASE_HOST=127.0.0.1
        DATABASE_PORT=5432
        DATABASE_NAME=strapi_db_aidi
        DATABASE_USERNAME=tobemodified
        DATABASE_PASSWORD=tobemodified
        DATABASE_SSL=false
        JWT_SECRET=tobemodified

    ```

    Замените `your_database_host`, `your_database_port`, `your_database_name`, `your_database_username` и `your_database_password` на соответствующие значения.

### Production установка и запуск Strapi

4.  Соберите Strapi для production:

    ```bash
    npm run build
    ```

5.  Запустите Strapi в режиме production. Порт по-умолчанию 1337:

    ```bash
    npm start
    ```

    Убедитесь, что переменные окружения для базы данных настроены правильно для production окружения.

## 3. Установка и запуск SvelteKit проекта (Frontend)

### Предварительные требования

* **Node.js:** Убедитесь, что у вас установлена поддерживаемая версия Node.js версии не ниже 20.

### Production установка и запуск SvelteKit проекта


1.  Перейдите в директорию `frontend`:

    ```bash
    cd frontend
    ```

2.  Установите зависимости:

    ```bash
    npm install
    ```

3.  Создайте файл `.env` в директории `frontend` и добавьте необходимые переменные окружения, например, URL бэкенда Strapi:

    ```bash
        PRIVATE_STRAPI_TOKEN=tobemodified
        PRIVATE_STRAPI_API_URL=tobemodified
        PUBLIC_BASE_URL=tobemodified
    ```

    Для получения PRIVATE_STRAPI_TOKEN вам необходимо зайти в админку Strapi, перейти в раздел API Tokens -> Full Access и нажмите кнопку Regenerate, после чего появится Token.
    PRIVATE_STRAPI_API_URL - используется для запросов сервер-сервер в процессе SSR.
    PUBLIC_BASE_URL - внешний URL для подгрузки изображений на стороне клиента.


4.  Установите зависимости:

    ```bash
    npm install
    ```

5.  Соберите SvelteKit для production:

    ```bash
    npm run build
    ```

6.  Запустите SvelteKit приложение. Порт по умолчанию 3000.
    ```bash
    npm run start
    ```
