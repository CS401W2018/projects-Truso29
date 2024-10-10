class Car {
    String model;
    String color;
    int year;

    public Car(String m, String c, int y) {
        model = m;
        color = c;
        year = y;
    }

    public void displayDetails() {
        System.out.println(model);
        System.out.println(color);
        System.out.println(year);
        System.out.println("-------------");
        
    }

    public static void main(String[] args) {
        Car myCar = new Car("Toyota", " Red", 2024);

        //myCar.model = "Toyota";
        //myCar.color = "Red";
        //myCar.year = 2024;

        myCar.displayDetails();

        Car wifeCar = new Car("BMW", "Blue", 2024);

        //wifeCar.model = "BMW";
        //wifeCar.color = "Blue";
        //wifeCar.year = 2024;

        wifeCar.displayDetails();

        ElectricCar ec = new ElectricCar("Tesla", " Silver", 2024, 2);
        ec.displayDetails()
    }

}