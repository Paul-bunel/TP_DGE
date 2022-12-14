#!/bin/bash                                                                                                                                                                                  
# mandatory                                                                                                                                                                                  
#SBATCH --nodes=1                                                                                                                                                                            
# option, to use remove the first comment                                                                                                                                                    
# name for the job, easier to find in squeue                                                                                                                                                 
#SBATCH --job-name=my_job_name                                                                                                                                                               
# filename of my program stdout and stderr                                                                                                                                                   
#SBATCH --output=my_program-%j.output                                                                                                                                                        
#SBATCH --error=my_program-%j.err                                                                                                                                                            
# max job run time                                                                                                                                                                           
# #SBATCH --time=05:00:00                                                                                                                                                                    
# number of tasks, task per node or core to use                                                                                                                                              
# #SBATCH --ntasks=1                                                                                                                                                                         
# #SBATCH --ntasks-per-node=1                                                                                                                                                                
# #SBATCH --threads-per-core=1                                                                                                                                                               
# number of cpus to use per task
# #SBATCH --cpus-per-task=3                                                                                                                                                                  
# max ram allocated to the job                                                                                                                                                               
# #SBATCH --mem=15GB                                                                                                                                                                         
# script bash classique                                                                                                                                                                      
# Chaque commande DOIT ??tre pr??c??d??e d'un srun

srun featureCounts -a /data/annotations/human/GRCh38.gtf -T 16 -o featureCounts/ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer bam/ERR3601126_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

srun featureCounts -a /data/annotations/human/GRCh38.gtf -T 16 -o featureCounts/ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer bam/ERR3601134_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

srun featureCounts -a /data/annotations/human/GRCh38.gtf -T 16 -o featureCounts/ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer bam/ERR3601326_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

srun featureCounts -a /data/annotations/human/GRCh38.gtf -T 16 -o featureCounts/ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer bam/ERR3601334_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

srun featureCounts -a /data/annotations/human/GRCh38.gtf -T 16 -o featureCounts/ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer bam/ERR3601327_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

srun featureCounts -a /data/annotations/human/GRCh38.gtf -T 16 -o featureCounts/ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer bam/ERR3601335_Illumina_HiSeq_2500_paired_end_sequencing_The_epigenetic_landscape_of_human_colorectal_cancer.bam

