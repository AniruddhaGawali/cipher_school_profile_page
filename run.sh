#!/usr/bin/env bash

code .

cd frontend
LOCA=$(pwd)
osascript -e "tell app \"Terminal\"
  do script \"cd '$LOCA' && cd .. && cd backend && npm start\"
end tell"

npm run dev
