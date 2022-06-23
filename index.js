//Creacion de nuevo usuario en twitch hasta llegar a recaptcha
//llamamos a la dependendia
const {Builder, By, Key, until} = require("selenium-webdriver");

//
(async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    //accedemos a la pagina principal de linkedin
    await driver.get('https://www.twitch.tv');
    // buscando y accediendo a inicio de sesion
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/nav/div/div[3]/div[3]/div/div[1]/div[2]/button/div/div')).click();
    await driver.sleep(5000);

    // llenando formulario 
    //usuario
    let usua = driver.findElement({xpath:'//*[@id="signup-username"]'});
    await driver.sleep(4000);
    usua.sendKeys('Everth69696900');
    //contraseña
    let passwd = driver.findElement({xpath:'//*[@id="password-input"]'});
    await driver.sleep(2000);
    passwd.sendKeys('$$$Everth_1999');
    //contraseña
    let passwdconf = driver.findElement({xpath:'//*[@id="password-input-confirmation"]'});
    await driver.sleep(2000);
    passwdconf.sendKeys('$$$Everth_1999');
    //dia nacimiento
    let dianac = driver.findElement({xpath:'/html/body/div[3]/div/div/div/div/div/div[1]/div/div/div[3]/form/div/div[3]/div/div[2]/div[1]/div/input'});
    await driver.sleep(2000);
    dianac.sendKeys('26');
    //mes nacimiento
    await driver.findElement(By.xpath('/html/body/div[3]/div/div/div/div/div/div[1]/div/div/div[3]/form/div/div[3]/div/div[2]/div[2]/select/option[7]')).click();
    await driver.sleep(2000);
    //año nacimiento
    let anionac = driver.findElement({xpath:'/html/body/div[3]/div/div/div/div/div/div[1]/div/div/div[3]/form/div/div[3]/div/div[2]/div[3]/div/input'});
    await driver.sleep(1000);
    anionac.sendKeys('2000');
    //numero de telefono
    let telefono = driver.findElement({xpath:'//*[@id="phone-input"]'});
    await driver.sleep(2000);
    telefono.sendKeys('63885630');
    const btn = await driver.findElement(By.xpath('/html/body/div[3]/div/div/div/div/div/div[1]/div/div/div[3]/form/div/div[5]/button/div/div'));
        //scroll del raton 
        driver.executeScript('arguments[0].scrollIntoView(0,300);', btn);
        await driver.sleep(4000);
        btn.click();
        await driver.sleep(2000);

    //finalizamos la tarea
  }finally {
    await driver.quit();
  }
})
();