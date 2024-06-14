package app.ajudaRS.exceptions;

public class DuplicateKeyException extends RuntimeException {
    public DuplicateKeyException(String message){
        super(message);
    }
}
