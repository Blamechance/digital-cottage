---
date: 2025-09-16T16:53
enableToc: true
tags:
  - SSH
---
# Setting up a new github project between local and repote:

## Setting up a new repo:
1. Install `gh` to programatically create remote repos. 
2. Authenticate and create project. 

```python 
# Install gh first: https://cli.github.com
gh auth login             
gh repo create my-project --public --source=. --push # This both creates the remote repo and pushes your local code.

```

### Readding key on system restart:
```python
# start a new ssh-agent for your terminal process:
eval "$(ssh-agent -s)"

# Add key file to SSH agent:
# This will need to be done per terminal session — i.e do it in the IDE environment you are working out of. 
ssh-add {KEY FILE}

# Check if authed:
ssh -T git@github.com
```
## Pushing an existing local directory to remote: 
Ensure you have an appropriate SSH key on your local device, that is also configured for the desired GitHub account's access. 

For example:
```sh
# To generate a new key:
ssh-keygen -t ed25519 -C "your_email@example.com"


# Setting up local private key: 
vim ~/.ssh/id_ed25519   # paste private key/secret here
chmod 600 ~/.ssh/id_ed25519

# Configure public key in GitHub — taking the cat contents:
cat ~/.ssh/id_ed25519.pub # public key in same repo


```

Then, you can test Github auth:

```sh 
ssh -T git@github.com

# Successful output looks like:
# "Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access."

```

Once auth is configured, then create a new repo with the same name as the local directory. Once this is complete, you can add it as the remote repo:
- These steps are also provided by github on repo creation. 

```sh 
git remote add origin git@github.com:USERNAME/REPO_NAME.git
git branch -M main   # ensures main is the branch name
git push -u origin main

```

# Cheatsheet: 
### Getting & Creating Projects


| Command                                                           | Description                                |
| ----------------------------------------------------------------- | ------------------------------------------ |
| `git init`                                                        | Initialize a local Git repository          |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repository |

### Basic Snapshotting

| Command                            | Description                                       |
| ---------------------------------- | ------------------------------------------------- |
| `git status`                       | Check status                                      |
| `git add [file-name.txt]`          | Add a file to the staging area                    |
| `git add -A`                       | Add all new and changed files to the staging area |
| `git commit -m "[commit message]"` | Commit changes                                    |
| `git rm -r [file-name.txt]`        | Remove a file (or folder)                         |
|                                    |                                                   |

### Branching & Merging

| Command | Description |
| ------- | ----------- |
| `git branch` | List branches (the asterisk denotes the current branch) |
| `git branch -a` | List all branches (local and remote) |
| `git branch [branch name]` | Create a new branch |
| `git branch -d [branch name]` | Delete a branch |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git checkout -b [branch name]` | Create a new branch and switch to it |
| `git checkout -b [branch name] origin/[branch name]` | Clone a remote branch and switch to it |
| `git branch -m [old branch name] [new branch name]` | Rename a local branch |
| `git checkout [branch name]` | Switch to a branch |
| `git checkout -` | Switch to the branch last checked out |
| `git checkout -- [file-name.txt]` | Discard changes to a file |
| `git merge [branch name]` | Merge a branch into the active branch |
| `git merge [source branch] [target branch]` | Merge a branch into a target branch |
| `git stash` | Stash changes in a dirty working directory |
| `git stash clear` | Remove all stashed entries |

### Sharing & Updating Projects

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | Push a branch to your remote repository |
| `git push -u origin [branch name]` | Push changes to remote repository (and remember the branch) |
| `git push` | Push changes to remote repository (remembered branch) |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git pull` | Update local repository to the newest commit |
| `git pull origin [branch name]` | Pull changes from remote repository |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Add a remote repository |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Set a repository's origin branch to SSH |

### Inspection & Comparison

| Command | Description |
| ------- | ----------- |
| `git log` | View changes |
| `git log --summary` | View changes (detailed) |
| `git log --oneline` | View changes (briefly) |
| `git diff [source branch] [target branch]` | Preview changes before merging |

credit: https://github.com/joshnh/Git-Commands/blob/master/README.md

