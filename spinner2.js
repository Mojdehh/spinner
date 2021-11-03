
const spinArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ' ];

for (let i = 0; i < spinArr.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinArr[i]);
  }, 100 + 200 * i);
}

setTimeout(() => {
  console.log();
}, 1500);