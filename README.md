# IDServerAngular
Как запустить:
0) Устанавливаем node.js
1) Качаем весь репозиторий, заходим cmd в toCMD\AuthServer.Infrastructure, создаём базу данных при, введя 2 команды 
  dotnet ef database update --context AppIdentityDbContext
  dotnet ef database update --context PersistedGrantDbContext
  
  Если будет жаловаться, что команда не найдена - устанавливает дотнет тулз  (dotnet tool install --global dotnet-ef)
  
  2) Заходим cmd в папку toCMD\Spa\oauth-client
    Ставим CLI ангуляра командой npm install -g @angular/cli
    Затем вводим npm install и ждём завершения. Если будет предлагать ввести npm -fix ,обязательно вводим
    Затем запускаем ангулярную морду командой ng serve (cmd сворачиваем, но не закрываем)
    
  3) Открываем в IDE проект
  
  4) Выбираем запускаемым AuthServer
    Заходим в AuthServer\Properties\launchSettings.json и меняем значение "sslPort" на 44377
    Запускаем и не выключаем
    
  5) Открываем в другом окне IDE проект ещё раз
  
  6) Выбираем запускаемым Resource.Api
    Заходим в Resource.Api\Properties\launchSettings.json и меняем значение "sslPort" на 44341
    Запускаем и не выключаем
    
  7) Открываем http://localhost:4200/
