package com.cs.learn.flashcard;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/card")
public class CardController {
	
	@Autowired
	private CardRepository cardRepository;
	
	@RequestMapping(method = RequestMethod.GET)
	public Map<String, Object> getAllCards() {
	  List<Card> cards = cardRepository.findAll();
	  Collections.shuffle(cards);
	  Map<String, Object> response = new LinkedHashMap<String, Object>();
	  response.put("totalCards", cards.size());
	  response.put("cards", cards);
	  return response;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	  public Map<String, Object> createCard(@RequestBody Map<String, Object> cardMap){
	    Card card = new Card(cardMap.get("frontData").toString(),
	        cardMap.get("backData").toString());
	    cardRepository.save(card);
	    Map<String, Object> response = new LinkedHashMap<String, Object>();
	    response.put("message", "Card created successfully");
	    response.put("card", card);
	    return response;
	  }

}
