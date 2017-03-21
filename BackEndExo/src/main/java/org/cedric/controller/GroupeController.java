package org.cedric.controller;

import java.util.List;

import org.cedric.model.Groupe;
import org.cedric.service.GroupeService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin("http://localhost:3000")
@RequestMapping("/groupe")
public class GroupeController {

	private GroupeService groupeService = new GroupeService();
	

    @RequestMapping(method=RequestMethod.GET)
    public @ResponseBody Groupe getGroupe(@RequestParam(value="id", defaultValue="1") int id) {
    	return groupeService.findById(id);
    }


    @RequestMapping(method=RequestMethod.PUT)
    public  @ResponseBody List<Groupe> addGroupe(@RequestParam(value="name", defaultValue="") String name) {
    	//int id = groupeService.getId();
    	groupeService.addGroupe(name);
    	//return groupeService.findById(id);
    	return groupeService.getAllGroupe();
    }
	
    @RequestMapping(method=RequestMethod.DELETE)
    public @ResponseBody Groupe deleteGroupe(@RequestParam(value="id", defaultValue="0") int id ) {
    	Groupe g = groupeService.findById(id);
    	groupeService.deleteGroupe(id);
    	return g;
    }
    
    @RequestMapping(method=RequestMethod.PUT, value="/update")
    public @ResponseBody Groupe UpdateGroupe(@RequestParam(value="id", defaultValue="0") int id, @RequestParam(value="name",defaultValue="") String name) {
    	groupeService.setGroupe(id, name);
    	return groupeService.findById(id);
    }
    
	@RequestMapping("/all")
	public  @ResponseBody List<Groupe> getAllGroupes() {
		return groupeService.getAllGroupe();
	}
	
	
}
