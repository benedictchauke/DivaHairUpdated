﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DivaHair.Controllers
{
    public class AppController : Controller //controller is descriptive view looks for app
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}