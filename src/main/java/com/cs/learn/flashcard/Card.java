package com.cs.learn.flashcard;

import org.springframework.data.annotation.Id;

public class Card {
	@Id
	private String id;
	
	private String frontData;
	
	private String backData;

	public Card(String frontData, String backData) {
		this.frontData = frontData;
		this.backData = backData;
	}

	public String getFrontData() {
		return frontData;
	}

	public void setFrontData(String frontData) {
		this.frontData = frontData;
	}

	public String getBackData() {
		return backData;
	}

	public void setBackData(String backData) {
		this.backData = backData;
	}	
}
