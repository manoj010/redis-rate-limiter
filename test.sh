#!/bin/bash
echo "Testing rate limiter (15 requests):"
for i in {1..15}
do
  echo "Request #$i"
  curl -s http://localhost:3000/hello | jq -r '.message'
  sleep 1 
done