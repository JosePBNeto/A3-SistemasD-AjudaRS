package app.BensPerdidos.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
public class ControllerAdvice {

    private CustomErrorDetails errorDetails;

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<CustomErrorDetails> handleHttpMessageNotReadableException(HttpMessageNotReadableException ex) {
        errorDetails = new CustomErrorDetails(LocalDateTime.now(), "Insira um valor válido", ex.getMessage());
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }

}
