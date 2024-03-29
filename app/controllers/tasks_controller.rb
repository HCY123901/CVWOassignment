class TasksController < ApplicationController
    def index 
        @tasks = Task.all
    end

    def show
        @task = Task.find(params[:id])
    end

    def new 
        @task = Task.new
    end
    
    def edit
        @task = Task.find(params[:id])
    end

    def create
        @task = Task.new(task_params)
        if @task.save
            redirect_to tasks_path
          else
            render 'new'
          end
      end
    
    def update
        @task = Task.find(params[:id])
       
        if @task.update(task_params)
          redirect_to task_path
        else
          render 'edit'
        end
    end

    def destroy 
        @task = Task.find(params[:id])
        @task.destroy
        redirect_to tasks_path
    end
    
    private
    def task_params
      params.require(:task).permit(:title, :text, :time, :location)
    end
end
