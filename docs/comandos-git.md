```markdown
# Comandos GitHub

# Inicializar el repositorio local

```

git init

```

- Referencia del repositorio local con el repositorio remoto (GITHUB)

```

git remote add origin [https://github.com/RPaezA/back_nest_angular.git](https://www.google.com/search?q=https://github.com/RPaezA/back_nest_angular.git)

```

# Validar referencia

```

git remote -v

```

-------------------

```

git add .
git commit -m "proyecto base"
git put origin master

```

```

* Para forzar

git push -f origin master

```
```

```
# 1. Instalar las dependencias de producciónEjecuta el comando para instalar JWT, Passport y Bcrypt:   

```
npm i --save @nestjs/jwt passport-jwt bcrypt
```



# 2. Instalar los tipos de desarrollo para TypeScriptInstala los tipos requeridos para autocompletado y tipado:

```
npm i --save-dev @types/passport-jwt
```



```

```

# Instalación


```

npm i --save @nestjs/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt

```

# Arrancamos proyecto


```

npm run start:dev

```

# Modules & Resource


```

nest g mo modules/auth
nest g res modules/users

```

# Controllers & Sevices


```

nest g co modules/auth
nest g s modules/auth

```



npx nest g mo modules/auth

npx nest g res modules/users


npx nest g co modules/auth


npx nest g s modules/auth


npm i --save class-validator class-transformer


npm run migration:generate --name=table_user

npm run migration:run

npm run migration:generate --name=modificando_table_user

npm run migration:generate --name=modificando_table_user2

npm run migration:generate --name=eliminando_correo__table_user

npm run migration:revert
