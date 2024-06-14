package app.ajudaRS.exceptions;

import org.springframework.boot.orm.jpa.hibernate.SpringImplicitNamingStrategy;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.support.DefaultHandlerExceptionResolver;

import java.time.LocalDateTime;

@RestControllerAdvice
public class ControllerAdvice {

    private CustomErrorDetails errorDetails;
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Object> handleDuplicatedUniqueData(DataIntegrityViolationException ex, WebRequest request) {
        CustomErrorDetails errorDetails = new CustomErrorDetails(LocalDateTime.now(), ex.getMessage(), request.getDescription(false));

        if (ex.getMessage().contains("usuario.email")) {
            errorDetails = new CustomErrorDetails(LocalDateTime.now(), "Email já cadastrado", request.getDescription(false));
        } else if (ex.getMessage().contains("usuario.cpf")){
            errorDetails = new CustomErrorDetails(LocalDateTime.now(), "CPF já cadastrado", request.getDescription(false));
        }


        return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);
    }


}
