import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ComparisonAnswerSet {
  type: string;
  answers: string[];
}

interface ComparisonQuestion {
  question: string;
  answerSets: ComparisonAnswerSet[];
}

interface CityData {
  name: string;
  questions: ComparisonQuestion[];
}

@Component({
  selector: 'app-cost-estimator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cost-estimator.component.html',
  styleUrl: './cost-estimator.component.scss'
})
export class CostEstimatorComponent {
  cities: CityData[] = [
    {
      name: 'Chennai',
      questions: [
        {
          question: 'What is the estimated cost per sq.ft for residential construction?',
          answerSets: [
            { type: 'Standard', answers: ['₹1,500 - ₹2,500', '₹1,500 - ₹2,500'] },
            { type: 'Premium', answers: ['₹2,500 - ₹3,500', '₹2,500 - ₹3,500'] },
            { type: 'Luxury', answers: ['₹3,500+', '₹3,500+'] }
          ]
        },
        {
          question: 'What factors affect construction cost?',
          answerSets: [
            { type: 'Standard', answers: ['Plot size, design, material, labor, regulations.', 'Plot size, design, material, labor, regulations.'] },
            { type: 'Premium', answers: ['All standard factors plus imported materials, advanced finishes.', 'All standard factors plus imported materials, advanced finishes.'] },
            { type: 'Luxury', answers: ['All premium factors plus automation, luxury amenities.', 'All premium factors plus automation, luxury amenities.'] }
          ]
        },
        {
          question: 'How long does it take to construct a house?',
          answerSets: [
            { type: 'Standard', answers: ['8-12 months', '8-12 months'] },
            { type: 'Premium', answers: ['10-14 months', '10-14 months'] },
            { type: 'Luxury', answers: ['12-18 months', '12-18 months'] }
          ]
        },
        {
          question: 'What is the estimated cost per sq.ft for residential construction?',
          answerSets: [
            { type: 'Standard', answers: ['₹1,500 - ₹2,500', '₹1,500 - ₹2,500'] },
            { type: 'Premium', answers: ['₹2,500 - ₹3,500', '₹2,500 - ₹3,500'] },
            { type: 'Luxury', answers: ['₹3,500+', '₹3,500+'] }
          ]
        },
        {
          question: 'What factors affect construction cost?',
          answerSets: [
            { type: 'Standard', answers: ['Plot size, design, material, labor, regulations.', 'Plot size, design, material, labor, regulations.'] },
            { type: 'Premium', answers: ['All standard factors plus imported materials, advanced finishes.', 'All standard factors plus imported materials, advanced finishes.'] },
            { type: 'Luxury', answers: ['All premium factors plus automation, luxury amenities.', 'All premium factors plus automation, luxury amenities.'] }
          ]
        },
        {
          question: 'How long does it take to construct a house?',
          answerSets: [
            { type: 'Standard', answers: ['8-12 months', '8-12 months'] },
            { type: 'Premium', answers: ['10-14 months', '10-14 months'] },
            { type: 'Luxury', answers: ['12-18 months', '12-18 months'] }
          ]
        }
      ]
    },
    {
      name: 'Bangalore',
      questions: [
        {
          question: 'What is the estimated cost per sq.ft for residential construction?',
          answerSets: [
            { type: 'Standard', answers: ['₹1,700 - ₹2,700', '₹1,700 - ₹2,700'] },
            { type: 'Premium', answers: ['₹2,700 - ₹3,700', '₹2,700 - ₹3,700'] },
            { type: 'Luxury', answers: ['₹3,700+', '₹3,700+'] }
          ]
        },
        {
          question: 'What factors affect construction cost?',
          answerSets: [
            { type: 'Standard', answers: ['Soil type, design, material, labor, regulations.', 'Soil type, design, material, labor, regulations.'] },
            { type: 'Premium', answers: ['All standard factors plus imported materials, advanced finishes.', 'All standard factors plus imported materials, advanced finishes.'] },
            { type: 'Luxury', answers: ['All premium factors plus automation, luxury amenities.', 'All premium factors plus automation, luxury amenities.'] }
          ]
        },
        {
          question: 'How long does it take to construct a house?',
          answerSets: [
            { type: 'Standard', answers: ['9-13 months', '9-13 months'] },
            { type: 'Premium', answers: ['11-15 months', '11-15 months'] },
            { type: 'Luxury', answers: ['13-19 months', '13-19 months'] }
          ]
        },
        {
          question: 'What is the estimated cost per sq.ft for residential construction?',
          answerSets: [
            { type: 'Standard', answers: ['₹1,700 - ₹2,700', '₹1,700 - ₹2,700'] },
            { type: 'Premium', answers: ['₹2,700 - ₹3,700', '₹2,700 - ₹3,700'] },
            { type: 'Luxury', answers: ['₹3,700+', '₹3,700+'] }
          ]
        },
        {
          question: 'What factors affect construction cost?',
          answerSets: [
            { type: 'Standard', answers: ['Soil type, design, material, labor, regulations.', 'Soil type, design, material, labor, regulations.'] },
            { type: 'Premium', answers: ['All standard factors plus imported materials, advanced finishes.', 'All standard factors plus imported materials, advanced finishes.'] },
            { type: 'Luxury', answers: ['All premium factors plus automation, luxury amenities.', 'All premium factors plus automation, luxury amenities.'] }
          ]
        },
        {
          question: 'How long does it take to construct a house?',
          answerSets: [
            { type: 'Standard', answers: ['9-13 months', '9-13 months'] },
            { type: 'Premium', answers: ['11-15 months', '11-15 months'] },
            { type: 'Luxury', answers: ['13-19 months', '13-19 months'] }
          ]
        }
      ]
    }
  ];

  types = ['Standard', 'Premium', 'Luxury'];
  selectedCity = 0; // Default to Chennai
  selectedTypes = [0, 1]; // Default: left=Standard, right=Premium

  // Allow multiple accordions to be open at once
  openRows: boolean[] = [true, false, false, false, false, false, false, false];
  specOpen = false;

  @ViewChild('areaInput') areaInput!: ElementRef;
  @ViewChild('balconyInput') balconyInput!: ElementRef;

  estimatedCost: number | null = null;

  // Example cost per sq.ft for each city and type
  costPerSqft = [
    // Chennai
    [1500, 2500, 3500], // Standard, Premium, Luxury
    // Bangalore
    [1700, 2700, 3700]
  ];

  toggleRow(idx: number) {
    this.openRows[idx] = !this.openRows[idx];
    // Do not close specOpen when opening/closing other accordions
  }

  toggleSpec() {
    this.specOpen = !this.specOpen;
    // Do not close other accordions when toggling spec
  }

  get questions() {
    return this.cities[this.selectedCity].questions;
  }

  getAnswer(questionIdx: number, side: 0 | 1): string {
    const typeIdx = this.selectedTypes[side];
    return this.questions[questionIdx].answerSets[typeIdx].answers[side];
  }

  calculateCost() {
    const area = Number(this.areaInput?.nativeElement.value) || 0;
    const balcony = Number(this.balconyInput?.nativeElement.value) || 0;
    const totalArea = area + balcony;
    const cityIdx = this.selectedCity;
    const typeIdx = this.selectedTypes[0]; // Use left type for calculation
    const rate = this.costPerSqft[cityIdx][typeIdx];
    this.estimatedCost = totalArea * rate;
  }

  // Example: questionSpecs for two cities (Chennai, Bangalore), 8 questions, 3 types each
  cityQuestionSpecs = [
    // Chennai
    [
      // Q1
      [
        // Standard
        {
          left: { materials: ['Steel - Sail or JSW'], structure: ['Chennai Standard Structure'] },
          right: { materials: ['Steel - Tata'], structure: ['Chennai Standard Structure R'] }
        },
        // Premium
        {
          left: { materials: ['Steel - Tata Tiscon'], structure: ['Chennai Premium Structure'] },
          right: { materials: ['Steel - JSW Neosteel'], structure: ['Chennai Premium Structure R'] }
        },
        // Luxury
        {
          left: { materials: ['Steel - Imported'], structure: ['Chennai Luxury Structure'] },
          right: { materials: ['Steel - Tata Steelium'], structure: ['Chennai Luxury Structure R'] }
        }
      ],
      // Q2
      [
        { left: { materials: ['Chennai Q2 Std'], structure: ['Std Struct'] }, right: { materials: ['Chennai Q2 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Chennai Q2 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Chennai Q2 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Chennai Q2 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Chennai Q2 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q3
      [
        { left: { materials: ['Chennai Q3 Std'], structure: ['Std Struct'] }, right: { materials: ['Chennai Q3 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Chennai Q3 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Chennai Q3 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Chennai Q3 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Chennai Q3 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q4
      [
        { left: { materials: ['Chennai Q4 Std'], structure: ['Std Struct'] }, right: { materials: ['Chennai Q4 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Chennai Q4 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Chennai Q4 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Chennai Q4 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Chennai Q4 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q5
      [
        { left: { materials: ['Chennai Q5 Std'], structure: ['Std Struct'] }, right: { materials: ['Chennai Q5 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Chennai Q5 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Chennai Q5 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Chennai Q5 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Chennai Q5 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q6
      [
        { left: { materials: ['Chennai Q6 Std'], structure: ['Std Struct'] }, right: { materials: ['Chennai Q6 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Chennai Q6 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Chennai Q6 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Chennai Q6 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Chennai Q6 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q7
      [
        { left: { materials: ['Chennai Q7 Std'], structure: ['Std Struct'] }, right: { materials: ['Chennai Q7 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Chennai Q7 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Chennai Q7 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Chennai Q7 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Chennai Q7 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q8
      [
        { left: { materials: ['Chennai Q8 Std'], structure: ['Std Struct'] }, right: { materials: ['Chennai Q8 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Chennai Q8 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Chennai Q8 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Chennai Q8 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Chennai Q8 Lux R'], structure: ['Lux Struct R'] } }
      ]
    ],
    // Bangalore
    [
      // Q1
      [
        { left: { materials: ['Steel - JSW (Bangalore)'], structure: ['Bangalore Standard Structure'] }, right: { materials: ['Steel - Tata (Bangalore)'], structure: ['Bangalore Standard Structure R'] } },
        { left: { materials: ['Steel - Tata Tiscon (Bangalore)'], structure: ['Bangalore Premium Structure'] }, right: { materials: ['Steel - JSW Neosteel (Bangalore)'], structure: ['Bangalore Premium Structure R'] } },
        { left: { materials: ['Steel - Imported (Bangalore)'], structure: ['Bangalore Luxury Structure'] }, right: { materials: ['Steel - Tata Steelium (Bangalore)'], structure: ['Bangalore Luxury Structure R'] } }
      ],
      // Q2
      [
        { left: { materials: ['Bangalore Q2 Std'], structure: ['Std Struct'] }, right: { materials: ['Bangalore Q2 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Bangalore Q2 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Bangalore Q2 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Bangalore Q2 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Bangalore Q2 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q3
      [
        { left: { materials: ['Bangalore Q3 Std'], structure: ['Std Struct'] }, right: { materials: ['Bangalore Q3 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Bangalore Q3 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Bangalore Q3 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Bangalore Q3 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Bangalore Q3 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q4
      [
        { left: { materials: ['Bangalore Q4 Std'], structure: ['Std Struct'] }, right: { materials: ['Bangalore Q4 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Bangalore Q4 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Bangalore Q4 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Bangalore Q4 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Bangalore Q4 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q5
      [
        { left: { materials: ['Bangalore Q5 Std'], structure: ['Std Struct'] }, right: { materials: ['Bangalore Q5 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Bangalore Q5 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Bangalore Q5 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Bangalore Q5 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Bangalore Q5 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q6
      [
        { left: { materials: ['Bangalore Q6 Std'], structure: ['Std Struct'] }, right: { materials: ['Bangalore Q6 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Bangalore Q6 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Bangalore Q6 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Bangalore Q6 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Bangalore Q6 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q7
      [
        { left: { materials: ['Bangalore Q7 Std'], structure: ['Std Struct'] }, right: { materials: ['Bangalore Q7 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Bangalore Q7 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Bangalore Q7 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Bangalore Q7 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Bangalore Q7 Lux R'], structure: ['Lux Struct R'] } }
      ],
      // Q8
      [
        { left: { materials: ['Bangalore Q8 Std'], structure: ['Std Struct'] }, right: { materials: ['Bangalore Q8 Std R'], structure: ['Std Struct R'] } },
        { left: { materials: ['Bangalore Q8 Prem'], structure: ['Prem Struct'] }, right: { materials: ['Bangalore Q8 Prem R'], structure: ['Prem Struct R'] } },
        { left: { materials: ['Bangalore Q8 Lux'], structure: ['Lux Struct'] }, right: { materials: ['Bangalore Q8 Lux R'], structure: ['Lux Struct R'] } }
      ]
    ]
  ];

  getSpec(i: number, side: 0 | 1) {
    const cityIdx = this.selectedCity;
    const typeIdx = this.selectedTypes[side];
    return this.cityQuestionSpecs[cityIdx]?.[i]?.[typeIdx]?.[side === 0 ? 'left' : 'right'] || { materials: [], structure: [] };
  }
}
