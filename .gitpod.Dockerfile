FROM gitpod/workspace-full
RUN npm install -g @angular/cli
RUN cd visa-calculator && npm install