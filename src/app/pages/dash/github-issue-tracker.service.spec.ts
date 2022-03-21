import { TestBed } from '@angular/core/testing';

import { GithubIssueTrackerService } from './github-issue-tracker.service';

describe('GithubIssueTrackerService', () => {
  let service: GithubIssueTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubIssueTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
