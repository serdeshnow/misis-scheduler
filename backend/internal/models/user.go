package models

import "time"

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Schedule struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Type     string `json:"type"`
	UpWeek   Week   `json:"upWeek"`
	DownWeek Week   `json:"downWeek"`
}

type Week struct {
	Monday    Day `json:"monday"`
	Tuesday   Day `json:"tuesday"`
	Wednesday Day `json:"wednesday"`
	Thursday  Day `json:"thursday"`
	Friday    Day `json:"friday"`
	Saturday  Day `json:"saturday"`
}

type Day struct {
	Lessons []Lesson `json:"lessons"`
}

type Lesson struct {
	Subject  string    `json:"subject"`
	Teacher  string    `json:"teacher"`
	Group    string    `json:"group"`
	Location string    `json:"location"`
	Number   int       `json:"number"`
	Start    time.Time `json:"start"`
	End      time.Time `json:"end"`
}
