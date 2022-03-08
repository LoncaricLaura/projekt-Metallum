### UPDATE REPOSITORIES

```sh
add-apt-repository ppa:ondrej/apache2 -y
apt-get update
apt-get dist-upgrade -Vy
apt-get autoremove --purge -Vy
```

### INSTALL REQUIRED PACKAGES

```sh
apt-get install -Vy software-properties-common unzip certbot python3-certbot-apache apache2 libapache2-mod-evasive
apt-get clean
```

### NVM

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install --lts
nvm cache clear
```

### NPM & PM2

```sh
npm install -g npm pm2
npm cache clean -f

pm2 install pm2-logrotate
pm2 set pm2-logrotate:compress true

# FOLLOW COMMAND INSTRUCTIONS
pm2 startup
```

### MAKE PROJECT DIR

```sh
cd /var/www/html
mkdir -m 777 nuxt-starter-kit
```

### APACHE PAGESPEED MODULE

```sh
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
wget https://dl-ssl.google.com/dl/linux/direct/mod-pagespeed-stable_current_amd64.deb -O ~/mod-pagespeed.deb -v
dpkg -i ~/mod-pagespeed.deb
rm ~/mod-pagespeed.deb -f
```

### ENABLE REQUIRED APACHE MODULES

```sh
a2dismod -f autoindex negotiation status deflate mpm_prefork
a2enmod proxy_fcgi setenvif mpm_event http2 rewrite ssl headers brotli expires proxy proxy_http proxy_connect proxy_ajp evasive pagespeed
service apache2 restart
```

### ADD APACHE SITE

```sh
cd /etc/apache2/sites-available
```

```apache
ServerAdmin ricardo@lloyds-digital.com
ServerName web.lloyds.dev
Protocols h2 h2c http/1.1

Include /var/www/html/nuxt-starter-kit/source/apache2.conf

ProxyPreserveHost On
ProxyPass / http://localhost:3000/
ProxyPassReverse / http://localhost:3000/
```

### CREATE NEW NUXT PROJECT

1. Git pull or clone <https://gitlab.com/lloydsgroup/nuxt-starter-kit.git>
2. Go to <https://gitlab.com> and create new project - Project name: kebab-case and lowercase; Project URL: lloydsgroup; Visibility Level: Private
3. Git clone your new project
4. Copy all files and folders from nuxt-starter-kit except `.git` folder to your new project
5. Run these commands:

```sh
npm install

git add -Av
git commit -m "initial commit"
git push -v
```

### DEPLOY TO PRODUCTION

1. Correctly set SSH and GIT constants in `env.js` file
2. Correctly set constants in `env.prod.js` file
3. Commit and push your changes to git

Once production server is set up, we need to set up our local deployment pipeline like so:

```sh
npm run deploy-setup
```

Then, every other time just do this:

```sh
npm run deploy
```
