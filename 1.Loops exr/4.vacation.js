function vacation(group, type, dayOfWeek) {
  let price = 0;
  switch (type) {
    case "Students":
      if (dayOfWeek === "Friday") {
        price = 8.45;
      } else if (dayOfWeek === "Saturday") {
        price = 9.8;
      } else if (dayOfWeek === "Sunday") {
        price = 10.46;
      }
      break;
    case "Business":
      if (dayOfWeek === "Friday") {
        price = 10.9;
      } else if (dayOfWeek === "Saturday") {
        price = 15.6;
      } else if (dayOfWeek === "Sunday") {
        price = 16;
      }
      if (group >= 100) {
        group -= 10;
      }
      break;
    case "Regular":
      if (dayOfWeek === "Friday") {
        price = 15;
      } else if (dayOfWeek === "Saturday") {
        price = 20;
      } else if (dayOfWeek === "Sunday") {
        price = 22.5;
      }
      break;
  }

  let totalPrice = price * group;

  if (type === "Students" && group >= 30) {
    totalPrice *= 0.85;
  }
  if (type === "Regular" && (group >= 10 && group <= 20)) {
    totalPrice *= 0.95;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
