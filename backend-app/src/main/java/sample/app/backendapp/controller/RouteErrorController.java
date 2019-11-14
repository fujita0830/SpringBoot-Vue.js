package sample.app.backendapp;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.boot.web.servlet.error.ErrorController;

@Controller
public class RouteErrorController implements ErrorController {

    /*
    Springboot上ではindex.htmlしか存在しないため、vueのパスが「/」以外の場合に、ページを更新した際に/errorとなる。
    その際に、再度index.htmlを返すようにハンドリングを行う事により、    ページを更新しても問題が怒らないようにする。
    */     

    private static final String PATH = "/error";
    @RequestMapping(PATH)
    String home() {
        return "index.html";
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }
}