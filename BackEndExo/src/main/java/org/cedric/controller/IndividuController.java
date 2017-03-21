package org.cedric.controller;

import java.util.List;

import org.cedric.model.Individu;
import org.cedric.service.IndividuService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin("http://localhost:3000")
@RequestMapping("/individu")
public class IndividuController {

	private IndividuService individuService = new IndividuService();
	
	@RequestMapping(method=RequestMethod.GET)
	public @ResponseBody List<Individu> getAllIndividus(){
		return individuService.getAllIndividu(); 
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/")
	public @ResponseBody Individu getIndividu(@RequestParam(value="id") int id) {
		return individuService.findById(id);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="update")
	public @ResponseBody Individu updateIndividu(@RequestBody Individu i ) {
		individuService.setIndividu(i);
		return i;
	}
	
}
