@echo off
title Staring project servers
cd c:\intern\server

echo "Start json server"
start start-json-server.bat

echo "Start http server"
start start-http-server.bat

echo "Start livereload server"
cd ..
start livereload

@REM pause