#!/bin/bash
echo "ng build --prod --output-path docs --base-href /invoice-client/"
ng build --prod --output-path docs --base-href /invoice-client/
echo "cp docs/index.html docs/404.html"
cp docs/index.html docs/404.html