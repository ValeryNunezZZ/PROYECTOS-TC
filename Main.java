import java.util.*;

public class Main {

    static void longCadena(String cadenaUno){

        System.out.println("\nLongitud cadena = " + cadenaUno.length());

    }

    static void prefijos(String cadenaUno){

        String aux = "";

        System.out.println("1. ");
        
        for(int i=0 ; i<cadenaUno.length() ; i++){
            aux += cadenaUno.charAt(i);
            System.out.println((i+2) + ". " + aux);
        }
    }

    static void potencia(int potencia, int tipo, Vector cadenas, String cadenaUno){

        String cadenaResultante = "";

        //positiva = 1
        //negativa = 2

        String aux = "";

        if(tipo == 2){
            //Invetir la cadena primero
            for(int i=cadenaUno.length()-1 ; i>=0 ; i--){
                aux += cadenaUno.charAt(i);
            }
        }else{
            aux = cadenaUno;
        }

        for(int i=0 ; i<potencia ; i++){
            cadenaResultante += aux;
        }

        cadenas.addElement(cadenaResultante);
        System.out.println(cadenaResultante);
    }
    
    static void sufijos(String cadenaUno){

        String auxCad = "";
        String auxCadS = "";
        int pos = 1;

        auxCadS += cadenaUno.charAt(cadenaUno.length()-1);

        System.out.println("1. ");
        
        for(int i=cadenaUno.length()-2 ; i>=0 ; i--){
            pos++;

            auxCad = auxCadS;
            auxCadS = String.valueOf(cadenaUno.charAt(i));
            auxCadS += auxCad;
            System.out.println(pos + ". " + auxCadS);
        }
    }
    
    static void concatenacion(String cadenaUno, String cadenaDos, Vector<String> cadenas){ 

        cadenas.addElement(cadenaUno + cadenaDos);
        System.out.println(cadenaUno + cadenaDos);

    }

    static void subCadenas(String cadenaUno){

        String aux = "";

        for(int i=0 ; i<cadenaUno.length() ; i++){

            aux = String.valueOf(cadenaUno.charAt(i));
            System.out.println(aux);

            for(int j=i+1 ; j<cadenaUno.length() ; j++){
                aux += String.valueOf(cadenaUno.charAt(j));
                System.out.println(aux);
            }

            aux = "";
        }

    }

    static void anadirCadenas(Vector<String> cadenas){

        Scanner s = new Scanner(System.in);

        System.out.println("\n\nCADENAS ACTUALES\n");

        for(int i=0 ; i<cadenas.size() ; i++){
            System.out.println((i+1) + ". " + cadenas.get(i));
        }


        System.out.print("\nNúmero de cadenas a agregar: ");
        int cadenasParaAgregar = s.nextInt();
        s.nextLine();

        for(int i=0 ; i<cadenasParaAgregar ; i++){
            System.out.print("\nIngresa cadena " + i+1 + ": ");
            String c = s.nextLine();

            c = validarCadena(c);

            cadenas.addElement(c);
        }

        System.out.println("\n\nCADENAS ACTUALES\n");

        for(int i=0 ; i<cadenas.size() ; i++){
            System.out.println((i+1) + ". " + cadenas.get(i));
        }
        

    }

    static String validarCadena(String cadena){

        Scanner s = new Scanner(System.in);

        while(cadena.length() > 50) {
            System.out.println("\nCADENA MUY GRANDE :(");

            System.out.println("\n\nIngresa cadena válida: ");
            cadena = s.nextLine();
        }

        return cadena;
    }

    static int validarPotencia(int potencia, String cadena){

        Scanner s = new Scanner(System.in);

        while(potencia*cadena.length() > 50){
            System.out.println("\nPOTENCIA MUY GRANDE :(");

            System.out.println("\n\nIngresa potencia válida: ");
            potencia = s.nextInt();
        }
        return potencia;
    }
    public static void main(String args[]){

        Vector<String> cadenas = new Vector<>(); 
        Scanner s = new Scanner(System.in);

        cadenas.addElement("Hola");
        cadenas.addElement("Mundo");

        int op = 1;

        while(op != 8){

            System.out.println("\n\nCADENAS ACTUALES\n");

            for(int i=0 ; i<cadenas.size() ; i++){
                System.out.println((i+1) + ". " + cadenas.get(i));
            }

            System.out.println("\n\nMenu:\n\n1. Concatenacion\n2. Potencia\n3. Generacion de prefijos\n4. Generacion de sufijos\n5. Generacion de subcadenas\n6. Calculo de longitud de cadena\n7. Añadir cadena(s)\n\n8. Salir\n\n");

            System.out.print("Ingresa una opcion: ");
            op = s.nextInt();

            int cadenaUno = 0;
            int cadenaDos = 0;

            if(op == 1){
                System.out.print("\nNum. de cadena 1 a operar: ");
                cadenaUno = s.nextInt();
                System.out.print("Num. de cadena 2 a operar: ");
                cadenaDos = s.nextInt();
            }else if(op != 1 && op != 7 && op != 8){
                System.out.print("\nNum. de cadena a operar: ");
                cadenaUno = s.nextInt();
            }

            switch (op) {
                case 1:

                    while(cadenas.get(cadenaUno-1).length() + cadenas.get(cadenaDos-1).length() > 50){
                        System.out.println("\n\nLONGITUD DE CADENA RESULTANTE MUY GRANDE :(");
                        System.out.print("\nNum. de cadena 1 a operar: ");
                        cadenaUno = s.nextInt();
                        System.out.print("Num. de cadena 2 a operar: ");
                        cadenaDos = s.nextInt();
                    }

                    concatenacion(cadenas.get(cadenaUno-1), cadenas.get(cadenaDos-1), cadenas);
                    break;

                case 2:

                    System.out.print("\nTipo:\n\n1.Positivo\n2.Negativo\n\nOPCIÓN: ");
                    int tipo = s.nextInt();

                    System.out.print("\nPotencia: ");
                    int potencia = s.nextInt();
                    
                    potencia = validarPotencia(potencia, cadenas.get(cadenaUno-1));

                    potencia(potencia, tipo, cadenas, cadenas.get(cadenaUno-1));
                    break;

                case 3:
                    prefijos(cadenas.get(cadenaUno-1));
                    break;

                case 4:
                    sufijos(cadenas.get(cadenaUno-1));
                    break;

                case 5:
                    subCadenas(cadenas.get(cadenaUno-1));
                    break;

                case 6:
                    longCadena(cadenas.get(cadenaUno-1));
                    break;

                case 7:
                    anadirCadenas(cadenas);
                break;

                case 8:
                break;

                default:
                    System.out.println("\nOPCION INVALIDA :(");
                    break;
            }
        }

        System.out.println("\nTEN UN EXCELENTE DÍA :)\n");
        
    }
}


///SI NO SE PUDEN ESCRIBIR CON LAS TRE OPERACIONES ENTONCES NO ES UN LEGUAJE REGULAR