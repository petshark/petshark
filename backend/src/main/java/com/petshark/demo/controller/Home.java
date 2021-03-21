package com.petshark.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
class Home {

    @RequestMapping("/")
    String getIndex() {
        return "index";
    }

    @RequestMapping("/admin")
    String getAdmin() {
        return "admin";
    }
}
