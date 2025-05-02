# blog_aidi_cms_strapi
# Настройка Monorepo SvelteKit и Strapi

Этот документ описывает шаги по установке и запуску монорепозитория, содержащего frontend на SvelteKit и backend на CMS Strapi, без использования Docker.

## 1. Клонирование репозитория

Склонируйте репозиторий с GitHub:

```bash
git clone [https://github.com/asafeeson/blog_aidi_cms_strapi](https://github.com/asafeeson/blog_aidi_cms_strapi)
cd blog_aidi_cms_strapi
```

## 2. Установка и запуск CMS Strapi (Backend)

### Предварительные требования

* **Node.js:** Убедитесь, что у вас установлена поддерживаемая версия Node.js.

* **PostgreSQL:** Установите PostgreSQL и создайте базу данных для Strapi.

### Установка

1.  Перейдите в директорию `backend`:

    ```bash
    cd backend
    ```

2.  Установите зависимости:

    ```bash
    npm install
    ```

3.  Создайте файл `.env` в директории `backend` и добавьте переменные окружения для подключения к базе данных PostgreSQL:

    ```bash
    DATABASE_CLIENT=postgres
    DATABASE_HOST=your_database_host
    DATABASE_PORT=your_database_port
    DATABASE_NAME=your_database_name
    DATABASE_USERNAME=your_database_username
    DATABASE_PASSWORD=your_database_password
    ```

    Замените `your_database_host`, `your_database_port`, `your_database_name`, `your_database_username` и `your_database_password` на соответствующие значения.

4.  Запустите Strapi:

    ```bash
    npm run develop
    ```

    Это запустит Strapi в режиме разработки. Для production, смотрите следующий шаг.

### Production установка и запуск Strapi

1.  Соберите Strapi для production:

    ```bash
    npm run build
    ```

2.  Запустите Strapi в режиме production:

    ```bash
    npm start
    ```

    Убедитесь, что переменные окружения для базы данных настроены правильно для production окружения.

## 3. Установка и запуск SvelteKit проекта (Frontend)

### Предварительные требования

* **Node.js:** Убедитесь, что у вас установлена поддерживаемая версия Node.js.

### Установка

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
    VITE_API_URL=http://your_strapi_host:1337 # Укажите URL вашего Strapi backend
    ```

    Замените `http://your_strapi_host:1337` на фактический URL, где работает ваш Strapi.

4.  Запустите SvelteKit в режиме разработки:

    ```bash
    npm run dev
    ```

### Production установка и запуск SvelteKit проекта

1.  Установите зависимости:

    ```bash
    npm install
    ```

2.  Соберите SvelteKit для production:

    ```bash
    npm run build
    ```

3.  Запустите SvelteKit приложение. Точный способ запуска зависит от конфигурации вашего production-окружения. Например, если вы размещаете приложение на Node.js сервере, вам может потребоваться использовать адаптер `@sveltejs/adapter-node` и запустить сгенерированный файл.
