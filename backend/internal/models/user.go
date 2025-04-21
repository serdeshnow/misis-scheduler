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
	Monday    []Lesson `json:"monday"`
	Tuesday   []Lesson `json:"tuesday"`
	Wednesday []Lesson `json:"wednesday"`
	Thursday  []Lesson `json:"thursday"`
	Friday    []Lesson `json:"friday"`
	Saturday  []Lesson `json:"saturday"`
}

type Lesson struct {
	Subject     string    `json:"subject"`
	SubjectType string    `json:"subjectType"`
	Teacher     string    `json:"teacher"`
	Group       string    `json:"group"`
	Location    string    `json:"location"`
	Number      int       `json:"number"`
	Start       time.Time `json:"start"`
	End         time.Time `json:"end"`
}
