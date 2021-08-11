import java.lang.*;

class A{
    public void printA(){
        System.out.println("Class A");
    }
}

class B extends A{
    public void printB(){
        System.out.println("Class B");
    }
}

class Demo extends B{
    public static void main(String[] args) {
        B obj = new B();
        B.printA();
        B.printB();
    }
}