package com.fortnox.boxinator.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author max.angman
 */

// Defines program controller
@Controller
public class HomeController {

  @RequestMapping("/")
  public String index() {
    return "index";
  }
}