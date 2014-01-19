cp a /\*\*/a
node /\*\*/a > /\*\*/out 2>&1
diff -s /\*\*/a /\*\*/out
