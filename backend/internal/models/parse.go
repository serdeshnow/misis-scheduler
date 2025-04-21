package models

type ScheduleRows struct {
	Success bool      `json:"success"`
	Lessons []Lessons `json:"schedule"`
}

type Lessons struct {
	Type      string   `json:"type"`
	Day       int      `json:"day"`
	Order     int      `json:"order"`
	Week      int      `json:"week"`
	Institute string   `json:"institute"`
	Group     []string `json:"group"`
	Subgroup  []string `json:"subgroup"` // Что это null
	Title     string   `json:"title"`
	Teacher   []string `json:"teacher"`
	Location  []string `json:"location"`
	Begins    string   `json:"begins"`
	Ends      string   `json:"ends"`
	ID        []string `json:"id"` // Что это null
}
