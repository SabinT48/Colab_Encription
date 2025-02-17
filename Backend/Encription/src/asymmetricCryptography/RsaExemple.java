package asymmetricCryptography;

import javax.crypto.Cipher;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Scanner;

public class RsaExemple {
    public static void main(String[] args) throws Exception
    {
        //ASK FOR USER INPUT
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a message to encrypt");
        String userMessage = input.nextLine();

        //GENERATE A RSA KEY PAIR
        KeyPair keyPair = generateRsaKeyPair();
        PublicKey publicKey = keyPair.getPublic();
        PrivateKey privateKey = keyPair.getPrivate();

        //IMPLEMENT AN ENCRYPTION
        byte [] cipherText = encrypt(userMessage, publicKey);

        //Print the cipher text
        System.out.println("Original Text is: " + userMessage);
        System.out.println("Cipher text is: "+ new String(cipherText));
    }

    public static KeyPair generateRsaKeyPair() throws Exception
    {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(2048);
        return keyPairGenerator.generateKeyPair();
    }

    public static byte [] encrypt(String message, PublicKey publicKey) throws Exception{
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);
        return cipher.doFinal(message.getBytes());

    }
}
