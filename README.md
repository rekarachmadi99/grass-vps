# getgrass-bot

This repository contains the code for `getgrass-bot`, a bot designed to establish WebSocket connections through various HTTP and SOCKS proxies, specifically aimed at farming for Grass Airdrop Season 2.

## Overview

`getgrass-bot` connects to a specified WebSocket server using both HTTP and SOCKS proxies. It leverages the `ws` library for WebSocket communication and integrates the `https-proxy-agent` and `socks-proxy-agent` libraries for enhanced proxy support. This allows for more versatile and resilient connections, accommodating a wider range of proxy types.

## Installation
install nodejs
curl -fssL https://deb.nodesource.com/setup_19.x | sudo -E bash
sudo apt install -y nodejs

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dante4rt/getgrass-bot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd getgrass-bot
   ```

3. Install the required dependencies using npm:

   ```bash
   npm install
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contribution

If you find this project useful, please consider giving it a star on GitHub! Your support motivates further development and enhancements.
