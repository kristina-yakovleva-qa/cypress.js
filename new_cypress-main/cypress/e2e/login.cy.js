describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашла на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверила нужный текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
        cy.get('#forgotEmailButton').click(); // Нажала "Забыли пароль?"
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#forgotForm > .header').should('be.visible'); // Текст виден пользователю
        cy.get('#mailForgot').type('matrona-kristi@yandex.ru'); // Ввела имейл
        cy.get('#restoreEmailButton').should('be.visible');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio11'); // Ввела неверный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверила нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('german@dolnikov.com'); // Ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверила нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })

    it('Верный пароль и логин без @', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверила нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })  
    
    it('Верный пароль и верный логин строчными буквами', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела верный логин строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверила нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден для пользователя
    })
 })
