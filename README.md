![Git-flow-strategy](/uploads/23d07c043450555bcd052e89a1916906/Git-flow-strategy.png)

1. **Understanding Git-Flow**

    This is a git branching strategy diagram. The diagram shows a main branch, develop branch, and feature branches. The feature branches are branched off from the develop branch. The develop branch is branched off from the main branch. The feature branches are merged into the develop branch. The develop branch is merged into the main branch. The main branch is tagged with a version number.

2. **Git-Flow Branching Strategy**

    The Git-Flow branching strategy is designed to manage feature development, bug fixes, and releases in a structured manner. It involves several types of branches: 

    **Main Branch:** 

    - The main branch represents the stable version of the codebase. It contains production code. 
    - Developers should avoid making changes to the main branch. 


    **Feature Branches:**

    - When working on a new feature or bug fix, developers create a feature branch from the main branch. 
    - 
    - Each feature branch focuses on a specific task, issue or feature. 
    - 
    - Developers collaborate and make changes on their own feature branches.
 

    **Development (Develop) Branch:**  

    - Once a feature is complete, it is merged into the development branch. 
    - The development branch waits for upcoming releases.
 

    **Release Branches:** 

    - QA testing, bug fixes, and final adjustments occur in the release branch. 
    - Once everything is stable, the release branch is merged back into both master and development branches. 


    **Bugfix Branch:**

    - A bugfix branch is created specifically to address bugs, defects, or critical issues in the codebase. 
    - It allows developers to work on fixing a specific problem without affecting other ongoing development work.
 

    **Hotfix Branch:**  

    - In case of bugs of security issues in the production code, a hotfix branch is created from the main branch. 
    - After testing, the hotfix branch is merged back into both main and develop.

3. **Git Flow Scenario**

        
    While we’re doing work using Git/Github, we normally work as a team. Team members usually create Local repositories while Team Leaders create Remote repositories. Team Leaders usually assign some tasks for team members to complete.

    Regarding the Git-Flow, as we can see that we start off from the Main Branch. Main branch serves as the main container for our production code. It is displayed when anyone visits our repository on GitHub and also the initial branch that Git checks out locally when someone clones the repository. The Main branch is the base which will be used for the production release.

    Develop Branch that branches off the Main branch is like a back-up branch, it represents stable production code and contains the latest work in progress. It serves as a staging area for ongoing development. We can integrate changes from various feature branches before they’re ready for production.

    In the Develop branch, we create feature branches as our own personal branches. During the development of features, there will be a lot of things that we need to modify. Since many people are working in the same repository, the code we’re working on is unstable and may cause breaking changes to other developers. So we develop our own branches, work on it until it is ready / can be merged into the develop branch. As seen in our diagram, we create three different features that work by different member, in each branch has different type of commits with a well-written messages that inform other developers our purpose of commit, this acts as a historical record of changes made in codebase and as well as communication tools that help with our work progress to continue with problems or conflicts. When each feature branch of one member is published, pull request and approved by the Leader, it will merge into the develop branch. The other members repeat the same process of work while making different commits.

    Feature branch allows developers to work on particular features without affecting the main codebase. Changes made in the feature branch can be committed, staged, and pushed to the remote repository. It keeps our works separate, preventing conflicts with our ongoing development. Moreover, developers can open pull requests for Code reviews or Feedback.

    After development work is completed, there is a release branch that branches out to deploy a new version . It’s a temporary branch that was created to prepare for a new production release. It forked off from the develop branch (when features are completed/merged into develop branch). The goal of using the release branch to stabilize code for the upcoming release or do the testing before release of the code/production. In some cases, if the release is already made and pushed to a remote repository, the other members that wanna use the same release can use git Track to track the release branch to continue our work. We can also use git Rebase in order to move the changes from one branch into another branch while reapplying commits on top of another base branch.

    Normally, before releasing our code/production, we need to test it first if there’s any issues in it. During the testing phase, there are some issues or defects that arise, we need to fix it by starting the process in the release branch and it is called Bugfix. It ensures that the upcoming release is stable and free from critical issues. When the fixing process is done in bugfix, it’ll merge into develop and main branch. While it merges into the main branch, we tag it with the release version(ex. Tag 1.0).

    We can assume that the production version is causing problems to the users due to server bugs, as developers we need to fix it by starting a branch called Hotfix. Hotfix is a type of branch that is used to solve critical issues or bugs in the live production version. Since the problems arise when we already launched our software/product., we need to checkout to the main branch to fix the issues and commit changes. Once everything is completed, it’ll merge into the main branch to ensure the fix is deployed to production, then tag it and merge to develop the branch to include the fix in the next regular release.

4. **Git-Flow Strategy: A Step-by-Step Guide**

    **Create a remote repository on GitHub :**

    1. Sign in to your GitHub account at GitHub. 
    1. Click on your profile icon in the top right corner and select “Your repositories” from the dropdown menu. 
    1. Click the green “New” button to create a new repository. 
    1. Fill in the repository details: 
    1. Repository name. 
    1. Description of the repository. 
    1. Choose visibility (public or private). 
    1. Initialize the repository with a README. 
    1. Click the “Create Repository” button. 

    **Create Local Repository :**

    1. **Start with Visual Studio Code :**
    
    - Launch the VS Code and create a new folder for the project.
    - Open the terminal in vs code.

    2. **Start the command git:**
    
    + `git init` (start the git work)
    + `git remote add origin <repository_URL>` (copy the link from the repository).
    + `git config user.name “username”`
    + `git config user.email “email”`
    3. Add files, Commit and Push:
    + `git push -u origin main`
    + `git status` (verify changes).
    4. Start Git-flow work : 
    - Command:
        + `git flow init -d` (start the gitflow work, and automatically create the develop branch).
        + `git push origin develop` (push the develop branch to the remote repository in the GitHub).

5. **Start Working on Feature branch**
    1. **Feature branch(1) :** 
    + `git checkout develop`
    + `git flow feature start issue_1`
    + `git flow feature start issue_2`
    + `git flow feature start issue_3`
    - add changes, commit, push:
    + `git status`
    + `git flow feature publish issue_1`
    + create the pull request and wait for the approval from the team.
        + `git flow feature finish issue_1` (automatically merge into develop branch and delete branch itself).
        + `git push origin develop.`
    2. **Feature branch(2) :**
    - Command:
    + `git checkout feature/issue_2`
    + `git pull origin develop` (get changes from the develop branch).
    - add changes, commit, push:
    + `git status` 
    + `git flow feature publish issue_2`
    + create the pull request and wait for the approval from the team.
    + `git flow feature finish issue_2` (automatically merge into develop branch and delete branch itself).
    + `git push origin develop`.
    3. **Feature branch(3) :** 
    - Command:
    + `git checkout feature/issue_3`
    + `git pull origin develop` (get changes from the develop branch).
    - add changes, commit, push:
    + `git status` 
    + `git flow feature publish issue_3`
    + create the pull request and wait for the approval from the team.
    + `git flow feature finish issue_3` (automatically merge into develop branch and delete branch itself).
    + `git push origin develop`.

    **Start Working on Release branch and Bugfix**

    3. **Release branch(1) :** 
    - Command:
    + `git checkout develop`
    + `git flow release start 1.0`
    + `git flow release publish 1.0`
    + `git flow bugfix start bug-1 release/1.0`
    - add changes, commit, push:
    + `git status`
    + `git flow publish bugfix bug-1`
    + create the pull request and wait for the approval from the team.
    + `git checkout release/1.0`
    + `git pull origin release/1.0`
    + `git checkout bugfix/bug-1`
    + `git flow bugfix finish bug-1`
    + `git checkout develop`
    + `git pull origin develop`
    + `git checkout main`
    + `git pull origin main`
    + `git checkout release/1.0`
    + `git flow release finish 1.0`(automatically merge into develop branch, also main branch, and delete branch itself)
    + `git push origin develop`
    + `git push origin main`
    + `git tag`
    + `git push –tag`

    **Start Working on Hotfix branch**

    4. **Hotfix branch(1):**
    - Command:
    + `git checkout main`
    + `git flow hotfix start 1.1`
    -  add changes, commit, push: 
    + `git flow hotfix publish 1.1`
    + create the pull request and wait for the approval from the team.
    + `git checkout main`
    + `git pull origin main`
    + `git pull origin develop`
    + `git checkout hotfix/1.1`
    + `git flow hotfix finish 1.1` (automatically merge into develop branch, also main branch, and delete branch itself)
    + `git push origin main`
    + `git push origin develop`
    + `git tag`
    + `git push –tag`

    **Method of Track branch**

    The git flow track command is used in Git Flow to set up tracking for branches that have been created using Git Flow's feature, release, bugfix, or hotfix commands. We would typically use git flow track when we want to establish a connection between our local branch and its corresponding branch on the remote repository.

    **Track the branch from repository using command**
    1. Feature branch : 
        + `git flow feature track <feature_name>`
    2. Release branch:
        + `git flow release track <release_name>`
    3. Bugfix branch:
        + `git flow bugfix track <bugfix_name>`
    4. Hotfix branch:
        + `git flow hotfix track <hotfix_name>`

    **Method of Merge branch**

    Merging is a straightforward way to integrate changes from one branch into another. When we merge a branch into another branch, Git combines the changes from the source branch into the target branch, creating a new commit that represents the combined history of both branches.
    - Command : (e.g merge main and develop)
    + `git checkout main`
    + `git merge develop`

    **Method of Rebase branch**

    Rebasing involves moving or "replaying" a series of commits from one branch into another branch's tip. It essentially rewrites the commit history by placing the commits from the source branch on top of the commits from the target branch. This results in a linear history, making it appear as if the changes were made directly on top of the target branch.
    - Command : (rebase feature from develop)
    + `git checkout feature/issue_2`
    + `git rebase develop`

    **Method of Reset/Revert branch**

    - First get the hash of the branch
    + `git log` (to check the history commit and the hash of the branch)
    - `git checkout develop`
    - `git reset <hash>`

    **Method of remote alias, commit history**


    - `git remote -v` (this will show the alias of our repository (fetch, origin))
    - `git log` (this command can also show the commit history)

    **Conclusion**


    The Git-Flow branching strategy employed in this project offers a clear and organized approach to managing feature development, releases, and bug fixes. By utilizing branches such as main, develop, feature, release, bugfix, and hotfix, the project maintains a well-defined structure, enabling seamless integration of changes and ensuring the stability and reliability of the codebase.	







 