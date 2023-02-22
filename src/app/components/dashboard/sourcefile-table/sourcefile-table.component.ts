import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { FormControl } from '@angular/forms';

interface Task {
  sourceFileName: string;
  created: Date;
  pendingDuration: number;
  reviewStatus: string;
  assignedTo: string;
}

@Component({
  selector: 'app-sourcefile-table',
  templateUrl: './sourcefile-table.component.html',
  styleUrls: ['./sourcefile-table.component.css'],
})
export class SourcefileTableComponent implements OnInit {
  taskList: Task[] = [
    {
      sourceFileName: 'file1',
      created: new Date(),
      pendingDuration: 5,
      reviewStatus: 'pending',
      assignedTo: 'John',
    },
    {
      sourceFileName: 'file2',
      created: new Date(),
      pendingDuration: 10,
      reviewStatus: 'approved',
      assignedTo: 'Mary',
    },
    {
      sourceFileName: 'file3',
      created: new Date(),
      pendingDuration: 2,
      reviewStatus: 'rejected',
      assignedTo: 'Bob',
    },
    {
      sourceFileName: 'file4',
      created: new Date(),
      pendingDuration: 5,
      reviewStatus: 'pending',
      assignedTo: 'John',
    },
    {
      sourceFileName: 'file5',
      created: new Date(),
      pendingDuration: 10,
      reviewStatus: 'approved',
      assignedTo: 'Mary',
    },
    {
      sourceFileName: 'file6',
      created: new Date(),
      pendingDuration: 2,
      reviewStatus: 'rejected',
      assignedTo: 'Bob',
    },
    {
      sourceFileName: 'file7',
      created: new Date(),
      pendingDuration: 5,
      reviewStatus: 'pending',
      assignedTo: 'John',
    },
    {
      sourceFileName: 'file8',
      created: new Date(),
      pendingDuration: 10,
      reviewStatus: 'approved',
      assignedTo: 'Mary',
    },
    {
      sourceFileName: 'file9',
      created: new Date(),
      pendingDuration: 2,
      reviewStatus: 'rejected',
      assignedTo: 'Bob',
    },
  ];
  filteredTaskList: Task[] = [];
  selectedFilter: string = '';
  searchKeyword: string = '';

  constructor() {}

  ngOnInit(): void {
    this.selectedFilter = 'all';
    this.filterTasks();
  }

  filterTasks(): void {
    if (this.selectedFilter === 'all') {
      this.filteredTaskList = this.taskList;
    } else if (this.selectedFilter === 'assignedToMe') {
      this.filteredTaskList = this.taskList.filter(
        (task) => task.assignedTo === 'you'
      );
    } else if (this.selectedFilter === 'needsToAssign') {
      this.filteredTaskList = this.taskList.filter(
        (task) => task.assignedTo === ''
      );
    }
  }

  assignTask(task: Task): void {
    task.assignedTo = 'you';
    this.filterTasks();
  }

  searchTasks(): void {
    this.filteredTaskList = this.taskList.filter((task) =>
      task.sourceFileName
        .toLowerCase()
        .includes(this.searchKeyword.toLowerCase())
    );
  }
}
