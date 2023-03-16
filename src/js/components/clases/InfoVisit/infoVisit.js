export class InfoVisit {
  constructor(card = {}) {
    this.card = {
      description: null,
      normalPressure: null,
      cardiovascularDiseases: null,
      lastVisitDate: null,
      age: null,
      ...card,
    };
  }

  render() {
    const container = document.createElement('div');
    container.className = 'info';

    const addRow = (label, value) => {
      const div = `
        <div class="info-row">
          <div class="info-label">${label}</div>
          <div class="info-value">${value || 'Невідомо'}</div>
        </div>`;
      container.insertAdjacentHTML('beforeend', div);
    };

    addRow('ПІБ:', `${this.card.lastName} ${this.card.firstName} ${this.card.middleName}`);
    addRow('Мета візиту:', this.card.purpose);
    addRow('Терміновість:', this.card.urgency);
    addRow('Статус:', this.card.complete ? 'Complete' : 'Incomplete');

    if (this.card.doctor === 'Cardiologist') {
      addRow('Вік:', this.card.age);
      addRow('Індекс маси тіла:', this.card.bodyMassIndex);
      addRow('Звичайний тиск:', this.card.normalPressure);
      addRow('Серцево-судинні захворювання:', this.card.cardiovascularDiseases);
    } else if (this.card.doctor === 'Dentist') {
      addRow('Дата останнього відвідування:', this.card.lastVisitDate);
    } else if (this.card.doctor === 'Therapist') {
      addRow('Вік:', this.card.age);
    }

    addRow('Короткий опис візиту:', this.card.description);

    return container;
  }
}